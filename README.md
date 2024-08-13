import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin
import pandas as pd
from selenium import webdriver
import re

options = webdriver.ChromeOptions()
options.add_argument('headless')

driver = webdriver.Chrome(options=options)

base_url = "https://www.allbirds.com"
total_url = "https://www.allbirds.com/collections/mens"

def fetch_page(url):
    driver.get(url)
    driver.implicitly_wait(10)
    html = driver.page_source
    return BeautifulSoup(html, 'html.parser')

# Function to extract text from <p> tags using regex
def extract_color_name(html_content):
    pattern = r'<p class="jsx-3934345351[^"]* Colorway__color-name[^"]*">([^<]+)</p>'
    match = re.search(pattern, html_content)
    if match:
        return match.group(1).strip()
    return 'Not Mention'

# Function to extract the discounted price
def extract_discounted_price(price_text):
    # Extract the first price from a text containing multiple prices
    pattern = r'\$\d+'
    match = re.search(pattern, price_text)
    if match:
        return match.group(0)
    return 'Not Mention'

# Fetch the page
soup = fetch_page(total_url)

# Find all <a> tags where class attribute is not present
anchor_tags = soup.find_all('a', class_=lambda x: x is None)

# Limit the range to the first 67 anchor tags
limited_tags = anchor_tags[:67]

# Lists to store links
AllowTheItems = []
Sale = []

# Extract item names and links
for tag in limited_tags:
    link_text = tag.get_text(strip=True) if tag else 'No text found'
    link_href = tag.get('href', 'No link found') if tag else 'No link found'
    item_absolute_link = urljoin(base_url, link_href) if link_href != 'No link found' else 'No URL'
    
    # Check if the link text contains "sale" and store in a separate list
    item = {
        'Link Text': link_text,
        'Absolute Link': item_absolute_link
    }
    
    if 'sale' in link_text.lower():
        soup = fetch_page(item_absolute_link)
        html_content = driver.page_source
        for product in soup.find_all('div', class_='MasterProductCard'):
            name = product.find('p', class_='Colorway__master-name').text.strip()
            discounted_price_text = product.find('p', class_='Colorway__price').text.strip()
            discounted_price = extract_discounted_price(discounted_price_text)
            original_price = product.find('span', class_='Colorway__compare-at-price').text.strip()
            color_name = extract_color_name(html_content)
            Sale.append({ 'Model of Shoe': link_text, 'Name': name, 'color': color_name, 'discounted_Price': discounted_price, 'original_price': original_price})
    else:
        soup = fetch_page(item_absolute_link)
        html_content = driver.page_source
        for product in soup.find_all('div', class_='MasterProductCard'):
            name = product.find('p', class_='Colorway__master-name').text.strip()
            price_text = product.find('p', class_='Colorway__price').text.strip()
            price = extract_discounted_price(price_text)
            color_name = extract_color_name(html_content)
            AllowTheItems.append({ 'Model of Shoe': link_text, 'Name': name, 'color': color_name, 'Price': price})

# Create DataFrames from the lists
df_sale = pd.DataFrame(Sale)
df_allow_the_items = pd.DataFrame(AllowTheItems)

df_sale.to_csv('sale_links.csv', index=False)
df_allow_the_items.to_csv('allow_the_items.csv', index=False)

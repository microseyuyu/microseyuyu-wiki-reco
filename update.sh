#!/bin/bash

set -e

cd 

# Read directory name from user
read -p "Enter your project directory: " directory

# Navigate to the project directory
cd ~/$directory

# Remove unwanted files and directories
sudo rm -rf .vuepress blogs docs package-lock.json README.md yarn.lock package.json

# Copy necessary files from the downloaded package
cp -rf ~/microseyuyu-wiki@1.0.1/blogs ~/$directory
cp -rf ~/microseyuyu-wiki@1.0.1/docs ~/$directory
cp -rf ~/microseyuyu-wiki@1.0.1/package-lock.json ~/$directory
cp -rf ~/microseyuyu-wiki@1.0.1/README.md ~/$directory
cp -rf ~/microseyuyu-wiki@1.0.1/yarn.lock ~/$directory
cp -rf ~/microseyuyu-wiki@1.0.1/package.json ~/$directory

# Navigate to the project directory
cd ~/$directory

# Create the .vuepress directory
mkdir .vuepress

# Copy necessary VuePress files
sudo cp -rf ~/microseyuyu-wiki@1.0.1/vuepress/* ~/$directory/.vuepress

# Install dependencies
sudo npm & sudo yarn install

# Download plugins
echo "Downloading plugins ~"
sudo yarn add -D @vuepress/plugin-active-header-links
sudo yarn add -D @vuepress/plugin-back-to-top

# Clean 
cd
sudo rm -rf v1.0.1.tar.gz
sudo rm -rf microseyuyu-wiki@1.0.1

# Finish
echo "Finished, enjoy!"

# Build and run the project
cd $directory
sudo yarn build
sudo yarn dev


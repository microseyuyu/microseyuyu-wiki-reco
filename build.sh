#!/bin/bash

set -e

cd 

# Download the release
wget https://github.com/microseyuyu/microseyuyu-wiki/releases/download/v1.0.0/v1.0.0.tar.gz
tar -xvf v1.0.0.tar.gz

# Install theme-cli globally
npm install @vuepress-reco/theme-cli@1.0.7 -g

# Initialize the theme
theme-cli init

# Read directory name from user
read -p "Enter your project name: " directory_name

# Navigate to the project directory
cd ~/$directory_name

# Install dependencies
yarn install

# Remove unwanted files and directories
sudo rm -rf .vuepress blogs docs package-lock.json README.md yarn.lock package.json

# Copy necessary files from the downloaded package
cp -rf ~/microseyuyu-wiki@1.0.0/blogs ~/$directory_name
cp -rf ~/microseyuyu-wiki@1.0.0/docs ~/$directory_name
cp -rf ~/microseyuyu-wiki@1.0.0/package-lock.json ~/$directory_name
cp -rf ~/microseyuyu-wiki@1.0.0/README.md ~/$directory_name
cp -rf ~/microseyuyu-wiki@1.0.0/yarn.lock ~/$directory_name
cp -rf ~/microseyuyu-wiki@1.0.0/package.json ~/$directory_name

# Navigate to the project directory
cd ~/$directory_name

# Create the .vuepress directory
mkdir .vuepress

# Copy necessary VuePress files
sudo cp -rf ~/microseyuyu-wiki@1.0.0/vuepress/* ~/$directory_name/.vuepress

# Clean 
cd
sudo rm -rf v1.0.0.tar.gz
sudo rm -rf microseyuyu-wiki@1.0.0

# Finish
echo "Finished, enjoy!"

# Build and run the project
cd $directory_name
sudo yarn build
sudo yarn dev


#!/usr/bin/env node

/**
 * Image Optimization Script
 * 
 * This script provides guidance for optimizing images in the project.
 * Run this to get recommendations for image optimization.
 * 
 * For actual optimization, you'll need to install additional tools:
 * npm install -g imagemin-cli imagemin-webp imagemin-mozjpeg imagemin-pngquant
 */

const fs = require('fs');
const path = require('path');

const imageExtensions = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG'];
const imagesDir = path.join(__dirname, '../src/Images');

function findImages(dir, imageList = []) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            findImages(filePath, imageList);
        } else if (imageExtensions.some(ext => file.endsWith(ext))) {
            imageList.push({
                path: filePath,
                size: stat.size,
                name: file
            });
        }
    });

    return imageList;
}

function formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function analyzeImages() {
    console.log('🔍 Analyzing images in the project...\n');

    const images = findImages(imagesDir);
    const totalSize = images.reduce((sum, img) => sum + img.size, 0);

    console.log(`📊 Found ${images.length} images`);
    console.log(`📦 Total size: ${formatBytes(totalSize)}\n`);

    // Sort by size (largest first)
    const sortedImages = images.sort((a, b) => b.size - a.size);

    console.log('🔝 Largest images (top 10):');
    sortedImages.slice(0, 10).forEach((img, index) => {
        const relativePath = path.relative(process.cwd(), img.path);
        console.log(`${index + 1}. ${img.name} - ${formatBytes(img.size)} (${relativePath})`);
    });

    console.log('\n💡 Optimization recommendations:');
    console.log('1. Convert large images to WebP format (30-50% smaller)');
    console.log('2. Compress JPEG images with quality 80-85%');
    console.log('3. Use responsive images with srcset for different screen sizes');
    console.log('4. Implement lazy loading (already done!)');

    console.log('\n🛠️  Commands to optimize images:');
    console.log('# Install optimization tools:');
    console.log('npm install -g imagemin-cli imagemin-webp imagemin-mozjpeg imagemin-pngquant');
    console.log('\n# Convert to WebP:');
    console.log('imagemin src/Images/**/*.{jpg,png} --out-dir=src/Images/webp --plugin=webp');
    console.log('\n# Compress JPEG:');
    console.log('imagemin src/Images/**/*.jpg --out-dir=src/Images/compressed --plugin=mozjpeg');
}

if (require.main === module) {
    analyzeImages();
}

module.exports = { analyzeImages, findImages };

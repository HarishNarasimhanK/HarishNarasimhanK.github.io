import { Jimp } from 'jimp';

const awsRaw = "/home/harish/.gemini/antigravity-ide/brain/887e795b-a4d3-4bf1-8368-39da1b8a435f/media__1786458808865.png";
const qiRaw = "/home/harish/.gemini/antigravity-ide/brain/887e795b-a4d3-4bf1-8368-39da1b8a435f/media__1786458750205.png";

const awsOut = "/home/harish/workspace/personal/Portfolio/public/uploads/aws_logo.png";
const qiOut = "/home/harish/workspace/personal/Portfolio/public/uploads/quickinsights_logo.png";

async function processAWS() {
  console.log("Processing AWS logo...");
  const image = await Jimp.read(awsRaw);
  
  image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
    const r = this.bitmap.data[idx + 0];
    const g = this.bitmap.data[idx + 1];
    const b = this.bitmap.data[idx + 2];
    
    // Key out grey/white checkerboard pattern
    const isGreyGrid = Math.abs(r - g) < 8 && Math.abs(g - b) < 8 && Math.abs(r - b) < 8 && r > 180;
    const isWhiteGrid = r > 240 && g > 240 && b > 240;
    
    if (isGreyGrid || isWhiteGrid) {
      this.bitmap.data[idx + 3] = 0; // Set transparent
    }
  });
  
  image.autocrop();
  
  // Sharpen kernel
  image.convolute([
    [0, -1, 0],
    [-1, 5, -1],
    [0, -1, 0]
  ]);
  
  await image.write(awsOut);
  console.log("Saved AWS logo to", awsOut);
}

async function processQI() {
  console.log("Processing QuickInsights logo...");
  const image = await Jimp.read(qiRaw);
  
  image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
    const r = this.bitmap.data[idx + 0];
    const g = this.bitmap.data[idx + 1];
    const b = this.bitmap.data[idx + 2];
    
    const isWhite = r > 235 && g > 235 && b > 235;
    if (isWhite) {
      this.bitmap.data[idx + 3] = 0;
    }
  });
  
  image.autocrop();
  
  image.convolute([
    [0, -1, 0],
    [-1, 5, -1],
    [0, -1, 0]
  ]);
  
  await image.write(qiOut);
  console.log("Saved QuickInsights logo to", qiOut);
}

async function main() {
  await processAWS();
  await processQI();
  console.log("All logo processing completed successfully!");
}

main().catch(console.error);

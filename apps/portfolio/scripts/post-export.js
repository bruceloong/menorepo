const fs = require('fs');
const path = require('path');

// 导出目录
const outDir = path.join(__dirname, '..', 'out');

// 创建.nojekyll文件
fs.writeFileSync(path.join(outDir, '.nojekyll'), '');
console.log('Created .nojekyll file');

// 如果需要自定义域名，取消下面的注释并设置正确的域名
// fs.writeFileSync(path.join(outDir, 'CNAME'), 'yourdomain.com');
// console.log('Created CNAME file');

console.log('Post-export processing completed');

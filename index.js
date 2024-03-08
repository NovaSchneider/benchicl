// 发送 HTTP 请求（使用 Axios）
async function sendHttpRequest(url, method = 'GET', data = null, headers = {}) {
  try {
      const response = await axios({
          url,
          method,
          data,
          headers
      });
      return response.data;
  } catch (error) {
      console.error('Error sending HTTP request:', error);
      throw error;
  }
}

// 异步文件读取
async function readFileAsync(filePath) {
  try {
      const data = await fs.promises.readFile(filePath, 'utf8');
      return data;
  } catch (error) {
      console.error('Error reading file:', error);
      throw error;
  }
}
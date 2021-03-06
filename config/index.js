'use strict';
const path = require('path');

const configObj = {
  env: process.env.NODE_ENV || 'development',
  log: {
    'accessLogPath': '/var/log/halo/access.log',
    'errorLogPath': '/var/log/halo/error.log',
    'debug': false,          // true | false
    'format': 'combined',    // 'combined' | 'common' | 'dev' | 'short' | 'tiny'
    'printAccessLog': true   // true | false
  },
  hl95: {
    host: 'http://q.hl95.com:8061/',
    username: '',
    password: '',
    epid: 0
  },
  image_upload: {
    local: {
      prefix: '/wp-content/upload/', // '/'或'/static/'或...
      upload_path: path.join(__dirname, '../static/wp-content/upload')
    }
  },
  docs: {
    repoPath: path.join(__dirname, '../static/repo'),
    buildPath: path.join(__dirname, '../static/book'),
    pdfPath: path.join(__dirname, '../static/pdf')
  },
  sessionEngine: {
    'type': 'Memcached',        // 'Redis' | 'Memcached' | 'Session' (do not use it in production)
    'remotes': ['127.0.0.1:11211'],
    'secret': 'uso_www',
    'cookie_name': 'ustack_www'
  },
  port: 5555,
  mysql: {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '1234',
    database: 'ashe'
  }
};
const wwwConfig = Object.assign({}, configObj);

function config(field) {
  return wwwConfig[field];
}

module.exports = config;

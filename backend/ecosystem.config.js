module.exports = {
  apps : [{
    script: 'server.js',
    watch: '.',
    env: {
      "NODE_ENV": "production",
  },
  }],

  deploy : {
    production : {
      "user" : 'ubuntu',
      "host" : '34.238.52.84',
      "ref"  : 'origin/master',
      "repo" : 'git@github.com:auretho/nonnaM.git',
      "path" : '/home/ubuntu',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};

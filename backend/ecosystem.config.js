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
      "host" : '18.235.233.76',
      "ref"  : 'origin/master',
      "repo" : 'git@github.com:auretho/nonnaM.git',
      "path" : '/home/ubuntu/nonna/backend',
      'pre-deploy-local': '',
      'post-deploy' : 'yarn && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};

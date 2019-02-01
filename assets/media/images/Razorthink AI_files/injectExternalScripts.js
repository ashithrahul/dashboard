try {
  const development = [];
  const envs = {
    'ai-stg.razorthink.net': 'staging',
    'ai.razorthink.com': 'production',
    'bigbraindev.razorthink.net': 'development',
    'localhost': 'development',
  };
  const env = envs[location.hostname] || env.localhost;
  const script = document.createElement('script');
  script.src = `/analytics_tools/${env}.js`;
  script.type = 'text/javascript';
  console.log('script', script);
  document.querySelector('head').appendChild(script);
} catch (e) {
  console.error(e);
}
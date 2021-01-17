module.exports = {
    exportPathMap: function () {
      return {
        "/": { page: "/" },
        "/team": { page: "/team" },
        "/articles": { page: "/articles" },
        "/leaderBoard": { page: "/leaderBoard" },
        "/events": { page: "/events" },
      };
    },
    webpack: (config, { dev }) => {
      config.module.rules = config.module.rules.map((rule) => {
        if (rule.loader === "babel-loader") {
          rule.options.cacheDirectory = false;
        }
        return rule;
      });
      return config;
    },
  };
  
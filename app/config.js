// This is the default configuration for the dev mode of the web console.
// A generated version of this config is created at run-time when running
// the web console from the openshift binary.
//
// To change configuration for local development, copy this file to
// assets/app/config.local.js and edit the copy.
window.DEV_SERVER_PORT = 9001;

window.OPENSHIFT_CONFIG = {
  apis: {
    hostPort: "localhost:8443",
    prefix: "/apis"
  },
  api: {
    openshift: {
      hostPort: "localhost:8443",
      prefix: "/oapi"
    },
    k8s: {
      hostPort: "localhost:8443",
      prefix: "/api"
    }
  },
  additionalServers: [{
    protocol: "https",
    hostPort: "apiserver-svc-cat.10.0.0.25.xip.io:6443",
    prefix: "/apis"
  }],
  auth: {
    oauth_authorize_uri: "https://localhost:8443/oauth/authorize",
    oauth_redirect_base: "https://localhost:" + window.DEV_SERVER_PORT,
    oauth_client_id: "openshift-web-console",
    logout_uri: ""
  },
  loggingURL: "",
  metricsURL: ""
};

window.OPENSHIFT_VERSION = {
  openshift: "dev-mode",
  kubernetes: "dev-mode"
};

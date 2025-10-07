{ pkgs }:
{
  channel = "unstable";
  packages = with pkgs; [
    nodejs_24
  ];
  idx = {
    extensions = [
      "vscodevim.vim"
      "esbenp.prettier-vscode"
      "bradlc.vscode-tailwindcss"
      "PulkitGangwar.nextjs-snippets"
      "ms-python.debugpy"
      "ms-python.python"
    ];
    workspace.onCreate = {
      npm-install = "npm install";
      default.openFiles = [ "config.tsx" ];
    };
    previews = {
      previews = {
        web = {
          command = [
            /*
              "docker"
              "compose"
              "watch"
            */
            "npm"
            "run"
            "dev"
            "--"
            "--port"
            "$PORT"
          ];
          manager = "web";
        };
      };
    };
  };
  services.docker.enable = true;
}

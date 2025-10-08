{ pkgs }:
{
  channel = "unstable";
  packages = with pkgs; [
    nodejs_24
  ];
  idx = {
    extensions = [
      "vscodevim.vim"
      "bradlc.vscode-tailwindcss"
      "PulkitGangwar.nextjs-snippets"
      "ms-python.debugpy"
      "ms-python.python"      
      "biomejs.biome"
      # "esbenp.prettier-vscode"
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

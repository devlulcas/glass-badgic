import { publish } from "gh-pages";

publish(
  "dist",
  {
    branch: "gh-pages",
    repo: "https://github.com/devlulcas/glass-badgic",
    user: {
      name: "Lucas Alves Rego",
      email: "lucasalvesrego.contato@gmail.com",
    },
    dotfiles: true,
  },
  () => {
    console.log("Deploy Complete!");
  }
);

import angular from "angular";

import { default as uiRouter } from "@uirouter/angularjs";
import diretivas from "./diretivas";

import { mainConfig } from "./main/config";
import { clienteConfig } from "./clientes/config";
import { itemConfig } from "./itens/config";
import { osConfig } from "./os/config";

export default angular
  .module("app", [uiRouter, diretivas])
  .config(mainConfig)
  .config(clienteConfig)
  .config(itemConfig)
  .config(osConfig).name;

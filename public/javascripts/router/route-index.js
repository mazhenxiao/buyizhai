import React, { Component } from "react";
import asyncComponent from "./AsyncComponent.js";
const ViewIndex = asyncComponent(()=>require("../view/index/index.js"))
export let routerIndex= [
    { path: '/index',
      exact:true,
      component: ViewIndex
    }
  ]
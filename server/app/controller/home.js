'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = {
      data: '欣欣小程序'
    };
  }
}

module.exports = HomeController;

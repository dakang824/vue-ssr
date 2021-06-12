import http from "axios";
import qs from "qs";
import { Message, Loading } from "element-ui";

function get(url, transition, data) {
  var corsUrl = "https://www.zhongshengrunde.com/";
  if (transition) {
    var loading = Loading.service({
      lock: true, // lock的修改符--默认是false
      text: "正在拼命加载中，请稍后", // 显示在加载图标下方的加载文案
      background: "rgba(0, 0, 0, 0.5)", // 遮罩层颜色
      target: process.browser ? document.querySelector("#table") : "body", // loadin覆盖的dom元素节点
    });
  }
  return new Promise((res, err) => {
    http({
      method: "get",
      url: corsUrl + url,
      params: data,
      headers: {
        token: process.browser ? localStorage.getItem("token") || "" : "",
      },
    })
      .then((response) => {
        res(response.data);
        // 成功回调函数停止加载
        if (transition) {
          setTimeout(() => loading && loading.close(), 300);
        }
      })
      .catch((error) => {
        err(error);
        // 成功回调函数停止加载
        if (transition) {
          setTimeout(() => loading && loading.close(), 300);
        }
      });
  });
}

function post(url, data, noload) {
  var corsUrl = "https://www.zhongshengrunde.com/";
  var loading = "";
  if (!noload) {
    loading = Loading.service({
      lock: true, // lock的修改符--默认是false
      text: "正在拼命加载中，请稍后", // 显示在加载图标下方的加载文案
      background: "rgba(0, 0, 0, 0.5)", // 遮罩层颜色
      fullscreen: true
    });
  }

  return new Promise((res, err) => {
    http({
      method: "post",
      url: corsUrl + url,
      data: data,
      headers: {
        token: process.browser ? localStorage.getItem("token") || "" : "",
      },
    })
      .then((response) => {
        res(response.data);
        // 成功回调函数停止加载
        if (!noload) {
          loading && loading.close();
        }
      })
      .catch((error) => {
        err(error);
        // 成功回调函数停止加载
        if (!noload) {
          loading && loading.close();
        }
      });
  });
}
export default {
  get: get,
  post: post,
};

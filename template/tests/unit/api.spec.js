import API from "@/api";

describe("API测试", () => {
  test("getWeather()传入参数{ citykey: '101270401' }，返回结果包含｛ city：'绵阳' ｝", () => {
    API.getWeather({
      citykey: "101270401"
    }).then(res => {
      expect(res.data.data.city).toEqual("绵阳");
    });
  });

  test("getWeather()不传参数，返回结果包含｛ status: 1002 ｝", () => {
    API.getWeather().then(res => {
      expect(res.data.status).toEqual(1002);
    });
  });
});

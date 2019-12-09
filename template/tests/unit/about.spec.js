import { shallowMount } from "@vue/test-utils";
import About from "@/views/About.vue";

describe("About.vue", () => {
  let wrapper, vm;

  beforeEach(() => {
    wrapper = shallowMount(About);
    vm = wrapper.vm;
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test("是一个 Vue 实例", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("是一个 About 实例", () => {
    expect(wrapper.is(About)).toBeTruthy();
  });

  test("加载后数据为空", () => {
    expect(Object.keys(vm.weather).length).toBe(0);
    expect(wrapper.contains("#clearWeather")).toBe(false);
    expect(wrapper.contains("#getWeather")).toBe(true);
    expect(wrapper.contains("#weatherInfo")).toBe(false);
    expect(wrapper.contains("#noneInfo")).toBe(true);
  });

  test("点击'#getWeather'后执行一次getWeather函数", () => {
    const mockFn = jest.fn();
    wrapper.setMethods({
      getWeather: mockFn
    });
    mockFn.mockReturnValue({ city: "绵阳" });
    wrapper.find("#getWeather").trigger("click");
    vm.weather = mockFn.mock.results[0].value;
    expect(mockFn).toBeCalled();
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(vm.weather).toEqual({ city: "绵阳" });
    expect(wrapper.contains("#clearWeather")).toBe(true);
    expect(wrapper.contains("#getWeather")).toBe(false);
    expect(wrapper.contains("#weatherInfo")).toBe(true);
    expect(wrapper.contains("#noneInfo")).toBe(false);
  });
});

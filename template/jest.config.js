module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  verbose: true,
  coverageDirectory: "<rootDir>/tests/coverage",
  collectCoverage: true,
  coverageReporters: ["text", "html", "text-summary"],
  moduleFileExtensions: [
    "js",
    "json",
    // 告诉 Jest 处理 `*.vue` 文件
    "vue"
  ]
};

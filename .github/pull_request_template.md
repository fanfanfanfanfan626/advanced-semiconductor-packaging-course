## 修改内容

说明修改了哪一课、哪段内容或哪个网站行为，以及为什么要改。

## 来源与许可证

- 技术结论使用了哪些一手来源？
- 是否包含外部图片、长段文字或其他受版权保护内容？
- 是否影响 MIT 代码与 CC BY 4.0 课程内容的边界？

## 验证

```bash
node scripts/prerender-static.mjs --write
node scripts/validate-site.mjs
```

- [ ] 我检查了生成的 HTML 和 `COURSE_INDEX.md`。
- [ ] 我本地预览了受影响页面和前后导航。
- [ ] 我没有提交凭据、私人学习记录、本机路径或无授权内容。

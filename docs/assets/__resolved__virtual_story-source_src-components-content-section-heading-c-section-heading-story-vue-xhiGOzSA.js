const __resolved__virtual_storySource_srcComponentsContentSectionHeadingCSectionHeadingStoryVue = `<script setup>\r
import CSectionHeading from './c-section-heading.vue'\r
import docs from './c-section-heading.md?raw'\r
<\/script>\r
\r
<template>\r
  <Story title="Components/c-section-heading" :docs="docs">\r
    <Variant title="Default — barra + título">\r
      <div style="width: 480px">\r
        <CSectionHeading>Título de sección</CSectionHeading>\r
      </div>\r
    </Variant>\r
\r
    <Variant title="Con índice">\r
      <div style="width: 480px">\r
        <CSectionHeading index="/01">Últimos lanzamientos</CSectionHeading>\r
      </div>\r
    </Variant>\r
\r
    <Variant title="Con acciones">\r
      <div style="width: 480px">\r
        <CSectionHeading index="/02">\r
          Próximamente\r
          <template #actions>\r
            <a href="#" style="font-size: 12px">VER TODO →</a>\r
          </template>\r
        </CSectionHeading>\r
      </div>\r
    </Variant>\r
\r
    <Variant title="Sin barra, nivel h3">\r
      <div style="width: 480px">\r
        <CSectionHeading :bar="false" level="h3">Bloque secundario</CSectionHeading>\r
      </div>\r
    </Variant>\r
  </Story>\r
</template>\r
`;
export {
  __resolved__virtual_storySource_srcComponentsContentSectionHeadingCSectionHeadingStoryVue as default
};

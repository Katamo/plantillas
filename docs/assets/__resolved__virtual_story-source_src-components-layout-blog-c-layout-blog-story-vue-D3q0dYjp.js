const __resolved__virtual_storySource_srcComponentsLayoutBlogCLayoutBlogStoryVue = `<script setup>
import CLayoutBlog from './c-layout-blog.vue'
import docs from './c-layout-blog.md?raw'
<\/script>

<template>
  <Story title="Components/c-layout-blog" :docs="docs">

    <Variant title="Default — contenido corto">
      <CLayoutBlog>
        <template #header>
          <div style="padding: 16px; background: #1a1a1a; color: white;">Header (sticky)</div>
        </template>
        <div style="padding: 24px;">
          <p>Contenido del artículo...</p>
        </div>
        <template #footer>
          <div style="padding: 16px; background: #e0e0e0;">Footer</div>
        </template>
      </CLayoutBlog>
    </Variant>

    <Variant title="Contenido largo — footer fuera del viewport">
      <CLayoutBlog>
        <template #header>
          <div style="padding: 16px; background: #1a1a1a; color: white;">Header (sticky)</div>
        </template>
        <div style="padding: 24px;">
          <p v-for="n in 20" :key="n" style="margin-bottom: 16px;">
            Párrafo {{ n }} del artículo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <template #footer>
          <div style="padding: 16px; background: #e0e0e0;">Footer — visible al llegar al final</div>
        </template>
      </CLayoutBlog>
    </Variant>

  </Story>
</template>
`;
export {
  __resolved__virtual_storySource_srcComponentsLayoutBlogCLayoutBlogStoryVue as default
};

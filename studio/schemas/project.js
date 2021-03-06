export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'highlight',
      Title: 'Highlight on Home Page?',
      type: 'boolean'
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'mainSkill',
      title: 'Main Skill',
      type: 'reference',
      to: { type: 'skill' },
    },{
      name: 'skill2',
      title: 'Skill 2',
      type: 'reference',
      to: { type: 'skill' },
    },{
      name: 'skill3',
      title: 'Skill 3',
      type: 'reference',
      to: { type: 'skill' },
    },{
      name: 'skill4',
      title: 'Skill 4',
      type: 'reference',
      to: { type: 'skill' },
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],

  orderings: [
    {
      title: 'Alphabetical',
      name: 'alphabetical',
      by: [{ field: 'title', direction: 'asc' }],
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },

    prepare(project, viewOptions = {}) {
      const title =
        viewOptions.ordering && viewOptions.order.name === 'alphabetical'
          ? `${project.title} (${project.title})`
          : project.title

      return { title: title }
    },

    prepare(selection) {
      const { author } = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}

// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    {
      name: 'portfolio',
      type: 'document',
      title: 'Portfolio',
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
          name: 'thumbnail',
          type: 'image',
          title: 'Thumbnail',
          validation: rule => rule.required(),
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: 'post',
      type: 'document',
      title: 'Posts',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
          validation: rule => rule.required(),
        },
        // {
        //   name: 'coverImage',
        //   type: 'image',
        //   title: 'Cover Image',
        //   validation: rule => rule.required(),
        //   options: {
        //     hotspot: true,
        //   },
        // },
        {
          name: 'date',
          type: 'datetime',
          title: 'Date',
          validation: rule => rule.required(),
        },
        {
          name: 'description',
          type: 'string',
          title: 'Description',
          validation: rule => rule.required(),
        },
        {
          name: 'content',
          type: 'array',
          of: [
            {
              type: 'block',
            },
            {
              type: 'image',
              options: {
                hotspot: true,
              },
              fields: [
                {
                  type: 'text',
                  name: 'alt',
                  title: 'Description',
                },
              ],
            },
            {
              type: 'code',
            },
          ],
        },
        {
          name: 'tags',
          type: 'array',
          of: [{ type: 'string' }],
          title: 'Tags',
        },
        {
          name: 'slug',
          type: 'slug',
          title: 'Slug',
          validation: rule => rule.required(),
        },
        {
          name: 'author',
          title: 'Author',
          type: 'reference',
          to: [{ type: 'author' }],
          validation: rule => rule.required(),
        },
      ],
    },
    {
      name: 'author',
      type: 'document',
      title: 'Author',
      fields: [
        {
          name: 'name',
          title: 'Name',
          type: 'string',
        },
        {
          name: 'avatar',
          title: 'Avatar',
          type: 'image',
        },
      ],
    },
  ]),
});

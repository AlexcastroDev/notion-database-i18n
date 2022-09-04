const getNotionPageBody = (page) => {
  return {
    filter: {
      or: [
        {
          property: 'page',
          select: {
            equals: page,
          },
        },
        {
          property: 'page',
          select: {
            equals: 'global',
          },
        },
      ],
    },
  }
}



module.exports = getNotionPageBody
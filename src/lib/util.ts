export function sortByDate(allPosts) {
    const sortedPosts = allPosts.sort((a, b) => {
        const dateA = new Date(a.data.pubDate);
        const dateB = new Date(b.data.pubDate);
        return dateB.getTime() - dateA.getTime();
      });
    return sortedPosts;
}
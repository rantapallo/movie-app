export const sortJobs = (jobs) => {
  const sortedJobs = jobs.sort((a, b) => 
  new Date(...b.release_date.split('/').reverse()) - new Date(...a.release_date.split('/').reverse()));
  return sortedJobs
}

export const sortData = (data) => {
  const sortedData = [...data];

  sortedData.sort((a, b) => {
    if (a.name > b.name) {
      return -1;
    } else {
      return 1;
    }
  })
  return sortedData;
}

export const dateFormatter = (date) => new Date(date).toLocaleDateString('en-US', {
  day: 'numeric', 
  month: 'short', 
  year: 'numeric'
})

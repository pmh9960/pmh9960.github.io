function addNewsItem(containerId, month, year, htmlContent) {
  const container = document.getElementById(containerId);
  
  const item = document.createElement('div');
  item.className = 'news-item';
  
  const dateLabel = document.createElement('div');
  dateLabel.className = 'date-label';
  
  const monthSpan = document.createElement('span');
  monthSpan.className = 'date-month';
  monthSpan.textContent = month;
  
  const yearSpan = document.createElement('span');
  yearSpan.className = 'date-year';
  yearSpan.textContent = year;
  
  dateLabel.appendChild(monthSpan);
  dateLabel.appendChild(yearSpan);
  
  const content = document.createElement('div');
  content.innerHTML = htmlContent;
  
  item.appendChild(dateLabel);
  item.appendChild(content);
  
  container.appendChild(item);
}

function addWorkItem(containerId, startMonth, startYear, endMonth, endYear, htmlContent) {
  const container = document.getElementById(containerId);
  
  const item = document.createElement('div');
  item.className = 'news-item';
  
  const dateLabel = document.createElement('div');
  dateLabel.className = 'date-label work-date-label';
  
  const createSpan = (text, className) => {
    const s = document.createElement('span');
    s.className = className;
    s.textContent = text;
    return s;
  };

  dateLabel.appendChild(createSpan(startMonth, 'date-month'));
  dateLabel.appendChild(createSpan(startYear, 'date-year'));
  dateLabel.appendChild(createSpan(' – ', 'date-separator')); // En dash
  dateLabel.appendChild(createSpan(endMonth, 'date-month'));
  dateLabel.appendChild(createSpan(endYear, 'date-year'));
  
  const content = document.createElement('div');
  content.innerHTML = htmlContent;
  
  item.appendChild(dateLabel);
  item.appendChild(content);
  
  container.appendChild(item);
}

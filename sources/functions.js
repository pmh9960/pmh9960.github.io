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

  // Start and end are grouped so narrow screens can stack them ("– end" on a new line).
  const startGroup = createSpan('', 'date-group');
  startGroup.appendChild(createSpan(startMonth, 'date-month'));
  startGroup.appendChild(createSpan(startYear, 'date-year'));
  const endGroup = createSpan('', 'date-group');
  endGroup.appendChild(createSpan(' – ', 'date-separator')); // En dash
  endGroup.appendChild(createSpan(endMonth, 'date-month'));
  endGroup.appendChild(createSpan(endYear, 'date-year'));
  dateLabel.appendChild(startGroup);
  dateLabel.appendChild(endGroup);
  
  const content = document.createElement('div');
  content.innerHTML = htmlContent;
  
  item.appendChild(dateLabel);
  item.appendChild(content);
  
  container.appendChild(item);
}

function collapseItems(containerId, visibleCount, itemSelector) {
  const container = document.getElementById(containerId);
  const all = itemSelector
    ? Array.from(container.querySelectorAll(':scope > ' + itemSelector))
    : Array.from(container.children);
  const items = all.slice(visibleCount);
  if (items.length === 0) return;

  const hidden = document.createElement('div');
  hidden.style.display = 'none';
  container.insertBefore(hidden, items[0]);
  items.forEach(item => hidden.appendChild(item));

  const toggleWrap = document.createElement('div');
  toggleWrap.className = 'lead';
  const toggle = document.createElement('button');
  toggle.type = 'button';
  toggle.className = 'fold-toggle';
  toggle.setAttribute('aria-expanded', 'false');
  hidden.id = containerId + '-earlier';
  toggle.setAttribute('aria-controls', hidden.id);
  toggle.textContent = '[Show more]';
  toggle.addEventListener('click', e => {
    e.preventDefault();
    const expanded = hidden.style.display !== 'none';
    hidden.style.display = expanded ? 'none' : '';
    toggle.setAttribute('aria-expanded', String(!expanded));
    toggle.textContent = expanded ? '[Show more]' : '[Show less]';
  });
  toggleWrap.appendChild(toggle);
  hidden.after(toggleWrap);
}

// Number of items up to and including the last one marked [NEW].
function countThroughLastNew(containerId, itemSelector) {
  const items = document.querySelectorAll('#' + containerId + ' > ' + itemSelector);
  let last = -1;
  items.forEach((item, i) => { if (item.textContent.includes('[NEW]')) last = i; });
  return last + 1;
}

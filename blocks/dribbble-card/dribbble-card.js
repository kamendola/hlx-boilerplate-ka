export default function decorate(block) {
  // Get all rows from the block
  const rows = [...block.children];
  console.log('Number of rows found:', rows.length); // Debug log
  
  // Create the card structure
  const card = document.createElement('div');
  card.className = 'dribbble-card';
  
  // Create image container (Row 1)
  if (rows[0]) {
    const imageContainer = document.createElement('div');
    imageContainer.className = 'dribbble-card-image-container';
    
    // Get image from first cell
    const imgCell = rows[0].querySelector('div');
    const img = imgCell ? (imgCell.querySelector('img') || imgCell.querySelector('picture')) : null;
    
    if (img) {
      img.className = 'dribbble-card-image';
      imageContainer.appendChild(img);
    }
    
    card.appendChild(imageContainer);
  }
  
  // Create content container
  const contentContainer = document.createElement('div');
  contentContainer.className = 'dribbble-card-content';
  
  // Create header with title (Row 2) and subtitle (Row 3)
  const header = document.createElement('div');
  header.className = 'dribbble-card-header';
  
  // Title from Row 2
  if (rows[1]) {
    const titleCell = rows[1].querySelector('div');
    if (titleCell) {
      const title = document.createElement('h3');
      title.className = 'dribbble-card-title';
      title.textContent = titleCell.textContent.trim();
      header.appendChild(title);
    }
  }
  
  // Subtitle from Row 3
  if (rows[2]) {
    const subtitleCell = rows[2].querySelector('div');
    if (subtitleCell) {
      const subtitle = document.createElement('p');
      subtitle.className = 'dribbble-card-subtitle';
      subtitle.textContent = subtitleCell.textContent.trim();
      header.appendChild(subtitle);
    }
  }
  
  contentContainer.appendChild(header);
  
  // Description from Row 4
  if (rows[3]) {
    const descriptionCell = rows[3].querySelector('div');
    if (descriptionCell) {
      const description = document.createElement('p');
      description.className = 'dribbble-card-description';
      description.textContent = descriptionCell.textContent.trim();
      contentContainer.appendChild(description);
    }
  }
  
  // Create footer
  const footer = document.createElement('div');
  footer.className = 'dribbble-card-footer';
  
  // Author section with image (Row 5) and name (Row 6)
  const authorContainer = document.createElement('div');
  authorContainer.className = 'dribbble-card-author';
  
  // Author image from Row 5
  if (rows[4]) {
    const authorImgCell = rows[4].querySelector('div');
    const authorImg = authorImgCell ? authorImgCell.querySelector('img') : null;
    if (authorImg) {
      authorImg.className = 'dribbble-card-author-image';
      authorContainer.appendChild(authorImg);
    }
  }
  
  // Author name from Row 6
  if (rows[5]) {
    const authorNameCell = rows[5].querySelector('div');
    if (authorNameCell) {
      const authorName = document.createElement('span');
      authorName.className = 'dribbble-card-author-name';
      authorName.textContent = authorNameCell.textContent.trim();
      authorContainer.appendChild(authorName);
    }
  }
  
  footer.appendChild(authorContainer);
  
  // Action button from Row 7
  if (rows[6]) {
    const actionCell = rows[6].querySelector('div');
    const link = actionCell ? actionCell.querySelector('a') : null;
    if (link) {
      link.className = 'dribbble-card-action';
      footer.appendChild(link);
    }
  }
  
  contentContainer.appendChild(footer);
  card.appendChild(contentContainer);
  
  // Replace the original block content with our card
  block.textContent = '';
  block.appendChild(card);
}

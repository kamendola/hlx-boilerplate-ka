export default function decorate(block) {
  // Get the content from the block
  const rows = [...block.children];
  
  // Create the card structure
  const card = document.createElement('div');
  card.className = 'dribbble-card';
  
  // Extract content from the Franklin block structure
  // Assuming the block has rows with specific content
  // Row 1: Image
  // Row 2: Title and Subtitle
  // Row 3: Description
  // Row 4: Author Image and Name
  // Row 5: Action Button
  
  // Create image container
  if (rows[0]) {
    const imageContainer = document.createElement('div');
    imageContainer.className = 'dribbble-card-image-container';
    
    // Get image from first cell of first row
    const imgCell = rows[0].children[0];
    const img = imgCell.querySelector('img') || imgCell.querySelector('picture');
    
    if (img) {
      img.className = 'dribbble-card-image';
      imageContainer.appendChild(img);
    }
    
    card.appendChild(imageContainer);
  }
  
  // Create content container
  const contentContainer = document.createElement('div');
  contentContainer.className = 'dribbble-card-content';
  
  // Create header with title and subtitle
  if (rows[1]) {
    const header = document.createElement('div');
    header.className = 'dribbble-card-header';
    
    const titleCell = rows[1].children[0];
    const subtitleCell = rows[1].children.length > 1 ? rows[1].children[1] : null;
    
    if (titleCell) {
      const title = document.createElement('h3');
      title.className = 'dribbble-card-title';
      title.textContent = titleCell.textContent.trim();
      header.appendChild(title);
    }
    
    if (subtitleCell) {
      const subtitle = document.createElement('p');
      subtitle.className = 'dribbble-card-subtitle';
      subtitle.textContent = subtitleCell.textContent.trim();
      header.appendChild(subtitle);
    }
    
    contentContainer.appendChild(header);
  }
  
  // Add description
  if (rows[2]) {
    const descriptionCell = rows[2].children[0];
    
    if (descriptionCell) {
      const description = document.createElement('p');
      description.className = 'dribbble-card-description';
      description.textContent = descriptionCell.textContent.trim();
      contentContainer.appendChild(description);
    }
  }
  
  // Create footer with author and action
  const footer = document.createElement('div');
  footer.className = 'dribbble-card-footer';
  
  // Add author
  if (rows[3]) {
    const authorContainer = document.createElement('div');
    authorContainer.className = 'dribbble-card-author';
    
    const authorImageCell = rows[3].children[0];
    const authorNameCell = rows[3].children.length > 1 ? rows[3].children[1] : null;
    
    if (authorImageCell) {
      const authorImg = authorImageCell.querySelector('img');
      if (authorImg) {
        authorImg.className = 'dribbble-card-author-image';
        authorContainer.appendChild(authorImg);
      }
    }
    
    if (authorNameCell) {
      const authorName = document.createElement('span');
      authorName.className = 'dribbble-card-author-name';
      authorName.textContent = authorNameCell.textContent.trim();
      authorContainer.appendChild(authorName);
    }
    
    footer.appendChild(authorContainer);
  }
  
  // Add action button
  if (rows[4]) {
    const actionCell = rows[4].children[0];
    const link = actionCell.querySelector('a');
    
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

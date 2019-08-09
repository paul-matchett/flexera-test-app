import React from 'react';
import { PropTypes as PT } from 'prop-types';

import { 
  ListItem,
  ListItemContainer,
  ListItemMain,
  ListItemLogo,
  ListItemTitle,
  ListItemDescription,
  ListItemFlag
} from './styled';

const Repository = ({ item, itemFlagged = true, toggleFlagged }) => {

  const { 
    full_name, 
    description, 
    owner: {avatar_url}
  } = item;

  const test = true;

  return (
    <ListItem>
      <ListItemContainer>
        <ListItemLogo className="listitem__logo" src={avatar_url} alt={full_name} />
        <ListItemMain>
          <ListItemTitle>{full_name}</ListItemTitle>
          <ListItemDescription>{description}</ListItemDescription>
        </ListItemMain>
      </ListItemContainer>
      <ListItemFlag
        role="button"
        aria-label="Flag user"
        className={
          itemFlagged
            ? "listitem__flag minus"
            : "listitem__flag plus"
        }
        onClick={() => { toggleFlagged(full_name, itemFlagged) }}
      />
    </ListItem>
  );
};

Repository.propTypes = {
  repositories: PT.array,
  fetchAllRepositories: PT.func,
}

export default Repository;
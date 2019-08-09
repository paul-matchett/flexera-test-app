import React from 'react';
import { useSelector } from 'react-redux';

import Repository from './Repository';
import Pagination from '../Pagination';

import { List } from './styled';
import { respositoriesLoading, getAllRepositories } from '../../store/reducers';

const Repositories = () => {

  const { isLoading, repositories } = useSelector(state => {
    return {
      isLoading: respositoriesLoading(state),
      repositories: getAllRepositories(state),
    }
  });

  const [flaggedList, setFlaggedList] = React.useState([{
    id: 'samplename'
  }]);

  React.useEffect(() => {
    const flaggedData = localStorage.getItem("flagged-list");
    if (flaggedData) {
      setFlaggedList(JSON.parse(flaggedData));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("flagged-list", JSON.stringify(flaggedList));
  });

  const toggleFlagged = (name, itemFlagged) => {
    if (itemFlagged) {
      setFlaggedList(
        flaggedList.filter(x => x.id !== name)
      )
    } else {
      setFlaggedList([
        ...flaggedList,
        { 
          id: name, 
        }
      ])
    }
  };

  return (
    <>
      <Pagination newResultsLoading={isLoading} />
      {
        isLoading ?
        <p>Repositories Loading..</p>
        :
        repositories &&
        <>
          <List>
          {
            repositories.map((repo, index) => {
              const itemFlagged = flaggedList.some(x => x.id === repo.full_name);
              return (
                <Repository 
                  key={index}
                  item={repo}
                  itemFlagged={itemFlagged}
                  toggleFlagged={toggleFlagged}
                />
              )
            })
          }
          </List>
        </>
      }
    </>
  );
};

export default Repositories;
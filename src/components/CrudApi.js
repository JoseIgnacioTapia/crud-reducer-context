import React, { useContext } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import Loader from './Loader';
import Message from './Message';

import { CrudContext } from '../context/CrudContext';

const CrupApi = () => {
  const { db, error, loading } = useContext(CrudContext);

  return (
    <div>
      <h2>CRUD Api con Context API</h2>
      <article className="grid-1-2">
        <CrudForm />
        {error && (
          <Message
            msg={`Error ${error.status} : ${error.statusText}`}
            bgColor="#dc3545"
          />
        )}
        {loading && <Loader />}
        {db && <CrudTable />}
      </article>
    </div>
  );
};

export default CrupApi;

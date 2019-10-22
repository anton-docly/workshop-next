import React from 'react';
import { useRouter } from 'next/router';

function NamePage() {
  const router = useRouter();
  const { name } = router.query;
  return <div>Hello {name}</div>;
}

export default NamePage;

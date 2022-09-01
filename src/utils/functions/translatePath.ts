export const normalize = (pathname: string) => pathname.split('/')[2];

export const translatePath = (pathname: string) => {
  switch(normalize(pathname)){
    case 'orders':
      return 'commande';
    case 'dishes':
      return 'plat';
    case 'categories':
      return 'categorie';
  }
}

import Text from '../../components/atoms/text/Text';
import Blank from '../../components/layout/BlankPage/Blank';

function ErrorPage() {
  return (
    <Blank>
      <Text tag="h1">Página no encontrada</Text>
      <Text tag="p">La página que estas intentando acceder no existe.</Text>
    </Blank>
  );
}

export default ErrorPage;

import { Text, Container, Collapse } from "@nextui-org/react";

export default function AboutMe() {
  return (
    <Container className="mt-2">
      <Collapse
        className="border-2 border-emerald-500 bg-gradient-to-b from-white to-emerald-100 rounded-lg p-4"
        title={
          <Text h3 weight="semibold" size={30} className="text-black">
            ¿Quién soy?
          </Text>
        }
        expanded={true}
      >
        <Text h1 weight="semibold" className="first-letter:text-2xl">
          Abogado egresado de la Universidad Nacional de La Plata (2001), donde
          obtuvo los premios La Ley, Rubinzal-Culzoni, y la Distinción Joaquín
          V. González, otorgada por la Municipalidad de La Plata a los egresados
          con mejores promedios. Obtuvo su Maestría en Leyes en la Universidad
          de Harvard (LL.M. 2008), donde fue becado por la Comisión Fulbright.
          Su tesina sobre el régimen constitucional de los tratados de derechos
          humanos en Latinoamérica fue calificada “sobresaliente” (A+) por su
          director de tesis, el profesor Marc Tushnet.
        </Text>
        <Text h1 weight="semibold" className="first-letter:text-2xl">
          {" "}
          También ha realizado cursos de posgrado en derecho en la Universidad
          de Yale, en la Academia de Derecho Internacional de La Haya, en el
          Instituto Interamericano de Derechos Humanos de Costa Rica, en el
          Instituto Internacional de Derechos Humanos de Estrasburgo, además de
          participar en el Concurso Interamericano de Derechos Humanos en la
          American University. Es candidato doctoral de la Universidad de Buenos
          Aires, con tesis sobre las “cuestiones políticas no justiciables”,
          bajo la dirección del profesor Alberto Bianchi.
        </Text>
        <Text h1 weight="semibold" className="first-letter:text-2xl">
          {" "}
          Es coautor de varios libros, además de haber escrito artículos y
          comentarios en revistas especializadas, y colaborado en varias obras
          colectivas en temas de derecho constitucional, derecho procesal y
          derechos humanos. Cuenta con veinte años de ejercicio de la profesión,
          encontrándose matriculado desde el año 2002 ante los Colegios de
          Abogados de La Plata, de la Capital Federal y ante las Cámaras
          Federales del interior. Además, ha sido admitido ante la Cámara de
          Apelaciones de Nueva York, luego de haber aprobado los exámenes que lo
          habilitan para el ejercicio de la abogacía ante los tribunales del
          Estado de Nueva York.
        </Text>
        <Text h1 weight="semibold" className="first-letter:text-2xl">
          {" "}
          Ha sido abogado asociado del Estudio Jurídico Arslanian Beraldi &
          Kaminker (2004/2012) y socio de Arslanian & Asociados (2012 hasta el
          presente). Anteriormente fue abogado relator de la Suprema Corte de
          Justicia de la Provincia de Buenos Aires (2003/04). Ha sido asesor de
          gabinete del Ministro de Justicia y Derechos Humanos de la Nación
          (2010/15). Integró la comisión de juristas que elaboró el Digesto
          Jurídico Argentino (2011), estando a cargo de la revisión de la rama
          de Derecho Constitucional. También ha sido asesor del Ministro de
          Seguridad (2005/07) y del Ministro de Justicia (desde el 2022) de la
          Provincia de Buenos Aires, siendo Coordinador del Programa de Naciones
          Unidas para el Desarrollo en el proyecto de reformas del servicio
          penitenciario.
        </Text>
      </Collapse>
    </Container>
  );
}

import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';
import swaggerDocument from '@/swagger/swagger.json';

function swaggerDocs(app: Express) {
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

export default swaggerDocs;

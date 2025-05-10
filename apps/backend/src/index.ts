import { Hono } from 'hono'
import auth from './routes/auth'
import { cors } from 'hono/cors'
import { createDbClient } from '@repo/db/index';
import { Bindings, Variables } from '@repo/types/index';
import user from './routes/user';
import { googleGenAIClient } from '@repo/ai/index';
import webhooks from './routes/webhooks';

const app = new Hono<{ Bindings: Bindings , Variables: Variables}>();
app.use('*', async (c, next) => {
    const db = createDbClient({ 
      DATABASE_URL: c.env.DATABASE_URL 
    });
    const ai = googleGenAIClient(c.env.GEMINI_API_KEY);
    c.set('db', db);
    c.set('ai', ai);
    
    await next();
});

app.use('*', cors())


app.route('/auth', auth);
app.route('/user', user);
app.route('/webhooks', webhooks);

export default app;

;
;
;
export const GETUserParamsSchema = {
    type: 'object',
    properties: {
        userId: { type: 'string' },
    },
    required: ['userId'],
};
export const POSTUserRouteBodySchema = {
    type: 'object',
    properties: {
        userId: { type: 'string' },
    },
    required: ['userId'],
};

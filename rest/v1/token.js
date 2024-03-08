;
;
export const GetAPITokenParamsSchema = {
    type: 'object',
    properties: {
        tokenId: { type: 'string' },
    },
    required: ['tokenId'],
};
export const PostAPITokenBodySchema = {
    type: 'object',
    properties: {
        userId: { type: 'string' },
    },
    required: ['userId'],
};

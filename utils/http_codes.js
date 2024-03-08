export var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["API_RUNNING"] = 200] = "API_RUNNING";
    StatusCodes[StatusCodes["FORBIDDEN_REQUEST"] = 403] = "FORBIDDEN_REQUEST";
    StatusCodes[StatusCodes["IP_NOT_ALLOWED"] = 403] = "IP_NOT_ALLOWED";
    StatusCodes[StatusCodes["METHOD_NOT_ALLOWED"] = 405] = "METHOD_NOT_ALLOWED";
    StatusCodes[StatusCodes["PROJECT_CREATED"] = 201] = "PROJECT_CREATED";
    StatusCodes[StatusCodes["PROJECT_DELETED"] = 200] = "PROJECT_DELETED";
    StatusCodes[StatusCodes["PROJECT_FOUND"] = 200] = "PROJECT_FOUND";
    StatusCodes[StatusCodes["PROJECT_HAS_USER"] = 400] = "PROJECT_HAS_USER";
    StatusCodes[StatusCodes["PROJECT_NOT_FOUND"] = 404] = "PROJECT_NOT_FOUND";
    StatusCodes[StatusCodes["PROJECT_REQUIRED_DATA_MISSING"] = 400] = "PROJECT_REQUIRED_DATA_MISSING";
    StatusCodes[StatusCodes["PROJECT_UPDATED"] = 200] = "PROJECT_UPDATED";
    StatusCodes[StatusCodes["PROJECT_USER_ALREADY_ASSIGNED"] = 409] = "PROJECT_USER_ALREADY_ASSIGNED";
    StatusCodes[StatusCodes["PROJECT_USER_ASSIGNED"] = 200] = "PROJECT_USER_ASSIGNED";
    StatusCodes[StatusCodes["PROJECT_USER_NOT_FOUND"] = 404] = "PROJECT_USER_NOT_FOUND";
    StatusCodes[StatusCodes["PROJECT_USER_UNASSIGNED"] = 200] = "PROJECT_USER_UNASSIGNED";
    StatusCodes[StatusCodes["REPOSITORY_CREATION_FAILED"] = 400] = "REPOSITORY_CREATION_FAILED";
    StatusCodes[StatusCodes["REPOSITORY_NOT_FOUND"] = 404] = "REPOSITORY_NOT_FOUND";
    StatusCodes[StatusCodes["ROUTE_NOT_FOUND"] = 404] = "ROUTE_NOT_FOUND";
    StatusCodes[StatusCodes["TOKEN_CREATED"] = 201] = "TOKEN_CREATED";
    StatusCodes[StatusCodes["TOKEN_UNAUTHORIZED"] = 401] = "TOKEN_UNAUTHORIZED";
    StatusCodes[StatusCodes["TRANSACTION_DEPOSIT_SENT"] = 200] = "TRANSACTION_DEPOSIT_SENT";
    StatusCodes[StatusCodes["TRANSACTION_FOUND"] = 200] = "TRANSACTION_FOUND";
    StatusCodes[StatusCodes["TRANSACTION_NOT_ENOUGH_FUNDS"] = 400] = "TRANSACTION_NOT_ENOUGH_FUNDS";
    StatusCodes[StatusCodes["TRANSACTION_NOT_FOUND"] = 404] = "TRANSACTION_NOT_FOUND";
    StatusCodes[StatusCodes["TRANSACTION_FROM_WALLET_NOT_FOUND"] = 404] = "TRANSACTION_FROM_WALLET_NOT_FOUND";
    StatusCodes[StatusCodes["TRANSACTION_FROM_WALLET_REQUIRED"] = 400] = "TRANSACTION_FROM_WALLET_REQUIRED";
    StatusCodes[StatusCodes["TRANSACTION_TO_WALLET_NOT_FOUND"] = 404] = "TRANSACTION_TO_WALLET_NOT_FOUND";
    StatusCodes[StatusCodes["TRANSACTION_TO_WALLET_REQUIRED"] = 400] = "TRANSACTION_TO_WALLET_REQUIRED";
    StatusCodes[StatusCodes["TRANSACTION_TRANSFER_SENT"] = 200] = "TRANSACTION_TRANSFER_SENT";
    StatusCodes[StatusCodes["TRANSACTION_TRANSFER_WALLETS_REQUIRED"] = 400] = "TRANSACTION_TRANSFER_WALLETS_REQUIRED";
    StatusCodes[StatusCodes["TRANSACTION_WITHDRAW_SENT"] = 200] = "TRANSACTION_WITHDRAW_SENT";
    StatusCodes[StatusCodes["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    StatusCodes[StatusCodes["USER_CREATED"] = 201] = "USER_CREATED";
    StatusCodes[StatusCodes["USER_DELETED"] = 200] = "USER_DELETED";
    StatusCodes[StatusCodes["USER_FOUND"] = 200] = "USER_FOUND";
    StatusCodes[StatusCodes["USER_HAS_BALANCE"] = 409] = "USER_HAS_BALANCE";
    StatusCodes[StatusCodes["USER_HAS_PROJECT"] = 400] = "USER_HAS_PROJECT";
    StatusCodes[StatusCodes["USER_INVITE_FAILED"] = 400] = "USER_INVITE_FAILED";
    StatusCodes[StatusCodes["USER_NOT_FOUND"] = 404] = "USER_NOT_FOUND";
    StatusCodes[StatusCodes["USER_REQUIRED_DATA_MISSING"] = 400] = "USER_REQUIRED_DATA_MISSING";
    StatusCodes[StatusCodes["USER_UPDATED"] = 200] = "USER_UPDATED";
    StatusCodes[StatusCodes["WALLET_NOT_FOUND"] = 404] = "WALLET_NOT_FOUND";
})(StatusCodes || (StatusCodes = {}));

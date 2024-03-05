import { HttpUtils } from "@/server/utils/HttpUtils";

const HOST = "https://auth-dev.web3idea.xyz";

export function Login(email: string, code: string) {
  return HttpUtils.post(`${HOST}/api/v1/sw/user/login`, {
    email,
    code,
  });
}

export function Register(email: string, code: string) {
  return HttpUtils.post(`${HOST}/api/v1/sw/user/register`, {
    email,
    code,
  });
}

// 给邮箱发送验证码
export function SendEmailCode(email: string) {
  return HttpUtils.post(`${HOST}/api/v1/sw/user/email-code`, {
    email: email,
  });
}

// 给邮箱发送验证码
export function CalcWalletAddress(ownerAddress: string) {
  return HttpUtils.post(`${HOST}/api/v1/ca/calc`, {
    ownerAddress,
  });
}

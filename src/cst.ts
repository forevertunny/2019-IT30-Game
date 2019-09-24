interface cstType {
  [key: string]: string
}

var cst: cstType = {}
/*=================================================
  TABLE CST
=================================================*/
cst.TB_NTF_COUNTDOWN_START = '0'
cst.TB_NTF_COUNTDOWN_STOP = '1'
cst.TB_NTF_COUNTDOWN_TIME = '2'
cst.TB_NTF_FANPI = '3'
cst.TB_NTF_PI_RESULT = '4'
cst.TB_NTF_STR_JOIN = '5'
cst.TB_NTF_STR_BETOUT = '6'
cst.TB_NTF_STR_QUIT = '7'
cst.TB_NTF_KICKOUT = '8'

/*=================================================
  BET CST
=================================================*/
cst.BT_NTF_BETOUT = '1'
cst.BT_NTF_BETOUT_BALANCE = '2'
cst.BT_NTF_PAYOUT = '3'
cst.BT_NTF_PAYOUT_BALANCE = '4'

/*=================================================
  USER CST
=================================================*/
cst.USER_NTF_INFO = '1'

export default cst



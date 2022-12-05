export interface Welcome5 {
  nfeProc: NfeProc;
}

export interface NfeProc {
  NFe:     NFe;
  protNFe: ProtNFe;
  _xmlns:  string;
  _versao: string;
}

export interface NFe {
  infNFe:    InfNFe;
  Signature: Signature;
}

export interface Signature {
  SignedInfo:     SignedInfo;
  SignatureValue: string;
  KeyInfo:        KeyInfo;
  _xmlns:         string;
}

export interface KeyInfo {
  X509Data: X509Data;
}

export interface X509Data {
  X509Certificate: string;
}

export interface SignedInfo {
  CanonicalizationMethod: CanonicalizationMethod;
  SignatureMethod:        CanonicalizationMethod;
  Reference:              Reference;
}

export interface CanonicalizationMethod {
  _Algorithm: string;
}

export interface Reference {
  Transforms:   Transforms;
  DigestMethod: CanonicalizationMethod;
  DigestValue:  string;
  _URI:         string;
}

export interface Transforms {
  Transform: CanonicalizationMethod[];
}

export interface InfNFe {
  ide:        IDE;
  emit:       Emit;
  dest:       Dest;
  det:        Det[];
  total:      Total;
  transp:     Transp;
  cobr:       Cobr;
  pag:        Pag;
  infAdic:    InfAdic;
  compra:     Compra;
  infRespTec: InfRespTec;
  _Id:        string;
  _versao:    string;
}

export interface Cobr {
  fat: Fat;
  dup: Dup;
}

export interface Dup {
  nDup:  string;
  dVenc: Date;
  vDup:  string;
}

export interface Fat {
  nFat:  string;
  vOrig: string;
  vDesc: string;
  vLiq:  string;
}

export interface Compra {
  xCont: string;
}

export interface Dest {
  CNPJ:      string;
  xNome:     string;
  enderDest: Ender;
  indIEDest: string;
  IE:        string;
  entrega:   Entrega;
}

export interface Ender {
  xLgr:    string;
  nro:     string;
  xCpl:    string;
  xBairro: string;
  cMun:    string;
  xMun:    string;
  UF:      string;
  CEP:     string;
  cPais:   string;
  xPais:   string;
}

export interface Entrega {
  CPF:     string;
  xLgr:    string;
  nro:     string;
  xBairro: string;
  UF:      string;
}

export interface Det {
  prod:      Prod;
  imposto:   Imposto;
  infAdProd: string;
  _nItem:    string;
}

export interface Imposto {
  vTotTrib: string;
  ICMS:     Icms;
  IPI:      Ipi;
  PIS:      Pis;
  COFINS:   Cofins;
}

export interface Cofins {
  COFINSAliq?: COFINSAliq;
  COFINSNT?:   Cofinsnt;
}

export interface COFINSAliq {
  CST:     string;
  vBC:     string;
  pCOFINS: string;
  vCOFINS: string;
}

export interface Cofinsnt {
  CST: string;
}

export interface Icms {
  ICMS00?: Icms00;
  ICMS60?: Icms60;
}

export interface Icms00 {
  orig:  string;
  CST:   string;
  modBC: string;
  vBC:   string;
  pICMS: string;
  vICMS: string;
}

export interface Icms60 {
  orig:            string;
  CST:             string;
  vBCSTRet:        string;
  pST:             string;
  vICMSSubstituto: string;
  vICMSSTRet:      string;
}

export interface Ipi {
  cEnq:  string;
  IPINT: Cofinsnt;
}

export interface Pis {
  PISAliq?: PISAliq;
  PISNT?:   Cofinsnt;
}

export interface PISAliq {
  CST:  string;
  vBC:  string;
  pPIS: string;
  vPIS: string;
}

export interface Prod {
  cProd:    string;
  cEAN:     string;
  xProd:    string;
  NCM:      string;
  CFOP:     string;
  uCom:     UCOM;
  qCom:     string;
  vUnCom:   string;
  vProd:    string;
  cEANTrib: string;
  uTrib:    UCOM;
  qTrib:    string;
  vUnTrib:  string;
  indTot:   string;
  xPed:     string;
  nItemPed: string;
  CEST?:    string;
  EXTIPI?:  string;
}

export enum UCOM {
  Cxs = "CXS",
  Un = "UN",
}

export interface Emit {
  CNPJ:      string;
  xNome:     string;
  xFant:     string;
  enderEmit: Ender;
  IE:        string;
  IM:        string;
  CNAE:      string;
  CRT:       string;
}

export interface IDE {
  cUF:         string;
  cNF:         string;
  natOp:       string;
  mod:         string;
  serie:       string;
  nNF:         string;
  dhEmi:       Date;
  dhSaiEnt:    Date;
  tpNF:        string;
  idDest:      string;
  cMunFG:      string;
  tpImp:       string;
  tpEmis:      string;
  cDV:         string;
  tpAmb:       string;
  finNFe:      string;
  indFinal:    string;
  indPres:     string;
  indIntermed: string;
  procEmi:     string;
  verProc:     string;
}

export interface InfAdic {
  infAdFisco: string;
  infCpl:     string;
}

export interface InfRespTec {
  CNPJ:     string;
  xContato: string;
  email:    string;
  fone:     string;
}

export interface Pag {
  detPag: DetPag;
}

export interface DetPag {
  tPag: string;
  vPag: string;
}

export interface Total {
  ICMSTot: ICMSTot;
}

export interface ICMSTot {
  vBC:        string;
  vICMS:      string;
  vICMSDeson: string;
  vFCP:       string;
  vBCST:      string;
  vST:        string;
  vFCPST:     string;
  vFCPSTRet:  string;
  vProd:      string;
  vFrete:     string;
  vSeg:       string;
  vDesc:      string;
  vII:        string;
  vIPI:       string;
  vIPIDevol:  string;
  vPIS:       string;
  vCOFINS:    string;
  vOutro:     string;
  vNF:        string;
  vTotTrib:   string;
}

export interface Transp {
  modFrete:   string;
  transporta: Transporta;
  vol:        Vol;
}

export interface Transporta {
  CNPJ:   string;
  xNome:  string;
  IE:     string;
  xEnder: string;
  xMun:   string;
  UF:     string;
}

export interface Vol {
  qVol:  string;
  esp:   string;
  marca: string;
  nVol:  string;
  pesoL: string;
  pesoB: string;
}

export interface ProtNFe {
  infProt: InfProt;
  _versao: string;
}

export interface InfProt {
  tpAmb:    string;
  verAplic: string;
  chNFe:    string;
  dhRecbto: Date;
  nProt:    string;
  digVal:   string;
  cStat:    string;
  xMotivo:  string;
}

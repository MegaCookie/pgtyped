// Generated from src/loader/sql/grammar/SQLLexer.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class SQLLexer extends Lexer {
	public static readonly ID = 1;
	public static readonly AS = 2;
	public static readonly OPEN_COMMENT = 3;
	public static readonly S_REQUIRED_MARK = 4;
	public static readonly S_OPTIONAL_MARK = 5;
	public static readonly WORD = 6;
	public static readonly DOUBLE_QUOTE = 7;
	public static readonly EOF_STATEMENT = 8;
	public static readonly WSL = 9;
	public static readonly STRING = 10;
	public static readonly PARAM_MARK = 11;
	public static readonly WS = 12;
	public static readonly TRANSFORM_ARROW = 13;
	public static readonly SPREAD = 14;
	public static readonly NAME_TAG = 15;
	public static readonly TYPE_TAG = 16;
	public static readonly OB = 17;
	public static readonly CB = 18;
	public static readonly COMMA = 19;
	public static readonly C_REQUIRED_MARK = 20;
	public static readonly ANY = 21;
	public static readonly CLOSE_COMMENT = 22;
	public static readonly CAST = 23;
	public static readonly COMMENT = 1;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE", "COMMENT",
	];

	public static readonly ruleNames: string[] = [
		"QUOT", "ID", "AS", "OPEN_COMMENT", "SID", "S_REQUIRED_MARK", "S_OPTIONAL_MARK", 
		"WORD", "SPECIAL", "DOUBLE_QUOTE", "EOF_STATEMENT", "WSL", "STRING", "PARAM_MARK", 
		"CAST", "CID", "WS", "TRANSFORM_ARROW", "SPREAD", "NAME_TAG", "TYPE_TAG", 
		"OB", "CB", "COMMA", "C_REQUIRED_MARK", "ANY", "CLOSE_COMMENT",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'/*'", undefined, "'?'", undefined, 
		"'\"'", "';'", undefined, undefined, "':'", undefined, "'->'", "'...'", 
		"'@name'", "'@param'", "'('", "')'", "','", undefined, undefined, "'*/'", 
		"'::'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "ID", "AS", "OPEN_COMMENT", "S_REQUIRED_MARK", "S_OPTIONAL_MARK", 
		"WORD", "DOUBLE_QUOTE", "EOF_STATEMENT", "WSL", "STRING", "PARAM_MARK", 
		"WS", "TRANSFORM_ARROW", "SPREAD", "NAME_TAG", "TYPE_TAG", "OB", "CB", 
		"COMMA", "C_REQUIRED_MARK", "ANY", "CLOSE_COMMENT", "CAST",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SQLLexer._LITERAL_NAMES, SQLLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return SQLLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(SQLLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "SQLLexer.g4"; }

	// @Override
	public get ruleNames(): string[] { return SQLLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return SQLLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return SQLLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return SQLLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x19\xB1\b\x01" +
		"\b\x01\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06" +
		"\t\x06\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f" +
		"\x04\r\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04" +
		"\x12\t\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04" +
		"\x17\t\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04" +
		"\x1C\t\x1C\x03\x02\x03\x02\x03\x03\x03\x03\x07\x03?\n\x03\f\x03\x0E\x03" +
		"B\v\x03\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04H\n\x04\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07" +
		"\x03\b\x03\b\x03\t\x06\tX\n\t\r\t\x0E\tY\x03\n\x06\n]\n\n\r\n\x0E\n^\x03" +
		"\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\r\x06\rh\n\r\r\r\x0E\ri\x03\r\x03" +
		"\r\x03\x0E\x03\x0E\x03\x0E\x07\x0Eq\n\x0E\f\x0E\x0E\x0Et\v\x0E\x03\x0E" +
		"\x03\x0E\x05\x0Ex\n\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x06\x12\x86\n\x12\r\x12" +
		"\x0E\x12\x87\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03" +
		"\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03" +
		"\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03" +
		"\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x06\x1B\xA9\n\x1B\r\x1B\x0E" +
		"\x1B\xAA\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x04r\xAA\x02\x02\x1D" +
		"\x04\x02\x02\x06\x02\x03\b\x02\x04\n\x02\x05\f\x02\x02\x0E\x02\x06\x10" +
		"\x02\x07\x12\x02\b\x14\x02\x02\x16\x02\t\x18\x02\n\x1A\x02\v\x1C\x02\f" +
		"\x1E\x02\r \x02\x19\"\x02\x02$\x02\x0E&\x02\x0F(\x02\x10*\x02\x11,\x02" +
		"\x12.\x02\x130\x02\x142\x02\x154\x02\x166\x02\x178\x02\x18\x04\x02\x03" +
		"\x07\x05\x02C\\aac|\x06\x022;C\\aac|\n\x02%(*1>@BB]]_`bb}\x80\x05\x02" +
		"\v\f\x0F\x0F\"\"\x03\x02^^\x02\xB6\x02\b\x03\x02\x02\x02\x02\n\x03\x02" +
		"\x02\x02\x02\f\x03\x02\x02\x02\x02\x0E\x03\x02\x02\x02\x02\x10\x03\x02" +
		"\x02\x02\x02\x12\x03\x02\x02\x02\x02\x14\x03\x02\x02\x02\x02\x16\x03\x02" +
		"\x02\x02\x02\x18\x03\x02\x02\x02\x02\x1A\x03\x02\x02\x02\x02\x1C\x03\x02" +
		"\x02\x02\x02\x1E\x03\x02\x02\x02\x02 \x03\x02\x02\x02\x03\"\x03\x02\x02" +
		"\x02\x03$\x03\x02\x02\x02\x03&\x03\x02\x02\x02\x03(\x03\x02\x02\x02\x03" +
		"*\x03\x02\x02\x02\x03,\x03\x02\x02\x02\x03.\x03\x02\x02\x02\x030\x03\x02" +
		"\x02\x02\x032\x03\x02\x02\x02\x034\x03\x02\x02\x02\x036\x03\x02\x02\x02" +
		"\x038\x03\x02\x02\x02\x04:\x03\x02\x02\x02\x06<\x03\x02\x02\x02\bG\x03" +
		"\x02\x02\x02\nI\x03\x02\x02\x02\fN\x03\x02\x02\x02\x0ER\x03\x02\x02\x02" +
		"\x10T\x03\x02\x02\x02\x12W\x03\x02\x02\x02\x14\\\x03\x02\x02\x02\x16b" +
		"\x03\x02\x02\x02\x18d\x03\x02\x02\x02\x1Ag\x03\x02\x02\x02\x1Cm\x03\x02" +
		"\x02\x02\x1Ey\x03\x02\x02\x02 {\x03\x02\x02\x02\"\x80\x03\x02\x02\x02" +
		"$\x85\x03\x02\x02\x02&\x8B\x03\x02\x02\x02(\x8E\x03\x02\x02\x02*\x92\x03" +
		"\x02\x02\x02,\x98\x03\x02\x02\x02.\x9F\x03\x02\x02\x020\xA1\x03\x02\x02" +
		"\x022\xA3\x03\x02\x02\x024\xA5\x03\x02\x02\x026\xA8\x03\x02\x02\x028\xAC" +
		"\x03\x02\x02\x02:;\x07)\x02\x02;\x05\x03\x02\x02\x02<@\t\x02\x02\x02=" +
		"?\t\x03\x02\x02>=\x03\x02\x02\x02?B\x03\x02\x02\x02@>\x03\x02\x02\x02" +
		"@A\x03\x02\x02\x02A\x07\x03\x02\x02\x02B@\x03\x02\x02\x02CD\x07c\x02\x02" +
		"DH\x07u\x02\x02EF\x07C\x02\x02FH\x07U\x02\x02GC\x03\x02\x02\x02GE\x03" +
		"\x02\x02\x02H\t\x03\x02\x02\x02IJ\x071\x02\x02JK\x07,\x02\x02KL\x03\x02" +
		"\x02\x02LM\b\x05\x02\x02M\v\x03\x02\x02\x02NO\x05\x06\x03\x02OP\x03\x02" +
		"\x02\x02PQ\b\x06\x03\x02Q\r\x03\x02\x02\x02RS\x07#\x02\x02S\x0F\x03\x02" +
		"\x02\x02TU\x07A\x02\x02U\x11\x03\x02\x02\x02VX\t\x03\x02\x02WV\x03\x02" +
		"\x02\x02XY\x03\x02\x02\x02YW\x03\x02\x02\x02YZ\x03\x02\x02\x02Z\x13\x03" +
		"\x02\x02\x02[]\t\x04\x02\x02\\[\x03\x02\x02\x02]^\x03\x02\x02\x02^\\\x03" +
		"\x02\x02\x02^_\x03\x02\x02\x02_`\x03\x02\x02\x02`a\b\n\x04\x02a\x15\x03" +
		"\x02\x02\x02bc\x07$\x02\x02c\x17\x03\x02\x02\x02de\x07=\x02\x02e\x19\x03" +
		"\x02\x02\x02fh\t\x05\x02\x02gf\x03\x02\x02\x02hi\x03\x02\x02\x02ig\x03" +
		"\x02\x02\x02ij\x03\x02\x02\x02jk\x03\x02\x02\x02kl\b\r\x05\x02l\x1B\x03" +
		"\x02\x02\x02mw\x05\x04\x02\x02nx\x05\x04\x02\x02oq\v\x02\x02\x02po\x03" +
		"\x02\x02\x02qt\x03\x02\x02\x02rs\x03\x02\x02\x02rp\x03\x02\x02\x02su\x03" +
		"\x02\x02\x02tr\x03\x02\x02\x02uv\n\x06\x02\x02vx\x05\x04\x02\x02wn\x03" +
		"\x02\x02\x02wr\x03\x02\x02\x02x\x1D\x03\x02\x02\x02yz\x07<\x02\x02z\x1F" +
		"\x03\x02\x02\x02{|\x07<\x02\x02|}\x07<\x02\x02}~\x03\x02\x02\x02~\x7F" +
		"\b\x10\x04\x02\x7F!\x03\x02\x02\x02\x80\x81\x05\x06\x03\x02\x81\x82\x03" +
		"\x02\x02\x02\x82\x83\b\x11\x03\x02\x83#\x03\x02\x02\x02\x84\x86\t\x05" +
		"\x02\x02\x85\x84\x03\x02\x02\x02\x86\x87\x03\x02\x02\x02\x87\x85\x03\x02" +
		"\x02\x02\x87\x88\x03\x02\x02\x02\x88\x89\x03\x02\x02\x02\x89\x8A\b\x12" +
		"\x05\x02\x8A%\x03\x02\x02\x02\x8B\x8C\x07/\x02\x02\x8C\x8D\x07@\x02\x02" +
		"\x8D\'\x03\x02\x02\x02\x8E\x8F\x070\x02\x02\x8F\x90\x070\x02\x02\x90\x91" +
		"\x070\x02\x02\x91)\x03\x02\x02\x02\x92\x93\x07B\x02\x02\x93\x94\x07p\x02" +
		"\x02\x94\x95\x07c\x02\x02\x95\x96\x07o\x02\x02\x96\x97\x07g\x02\x02\x97" +
		"+\x03\x02\x02\x02\x98\x99\x07B\x02\x02\x99\x9A\x07r\x02\x02\x9A\x9B\x07" +
		"c\x02\x02\x9B\x9C\x07t\x02\x02\x9C\x9D\x07c\x02\x02\x9D\x9E\x07o\x02\x02" +
		"\x9E-\x03\x02\x02\x02\x9F\xA0\x07*\x02\x02\xA0/\x03\x02\x02\x02\xA1\xA2" +
		"\x07+\x02\x02\xA21\x03\x02\x02\x02\xA3\xA4\x07.\x02\x02\xA43\x03\x02\x02" +
		"\x02\xA5\xA6\x07#\x02\x02\xA65\x03\x02\x02\x02\xA7\xA9\v\x02\x02\x02\xA8" +
		"\xA7\x03\x02\x02\x02\xA9\xAA\x03\x02\x02\x02\xAA\xAB\x03\x02\x02\x02\xAA" +
		"\xA8\x03\x02\x02\x02\xAB7\x03\x02\x02\x02\xAC\xAD\x07,\x02\x02\xAD\xAE" +
		"\x071\x02\x02\xAE\xAF\x03\x02\x02\x02\xAF\xB0\b\x1C\x06\x02\xB09\x03\x02" +
		"\x02\x02\r\x02\x03@GY^irw\x87\xAA\x07\x04\x03\x02\t\x03\x02\t\b\x02\b" +
		"\x02\x02\x04\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SQLLexer.__ATN) {
			SQLLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SQLLexer._serializedATN));
		}

		return SQLLexer.__ATN;
	}

}


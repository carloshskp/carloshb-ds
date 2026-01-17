/**
 * Testes de smoke para a API pública do Design System
 * 
 * Verifica que todos os exports principais estão disponíveis e funcionando.
 */
import { describe, it, expect } from 'vitest';

// Import da API pública principal
import * as DS from '../public-api';

describe('Public API', () => {
  describe('Exports principais', () => {
    it('exporta Button', () => {
      expect(DS.Button).toBeDefined();
    });

    it('exporta Input', () => {
      expect(DS.Input).toBeDefined();
    });

    it('exporta Textarea', () => {
      expect(DS.Textarea).toBeDefined();
    });

    it('exporta Checkbox', () => {
      expect(DS.Checkbox).toBeDefined();
    });

    it('exporta Radio', () => {
      expect(DS.Radio).toBeDefined();
    });

    it('exporta Field', () => {
      expect(DS.Field).toBeDefined();
    });

    it('exporta Alert', () => {
      expect(DS.Alert).toBeDefined();
    });

    it('exporta Badge', () => {
      expect(DS.Badge).toBeDefined();
    });

    it('exporta Card e composição', () => {
      expect(DS.Card).toBeDefined();
      expect(DS.CardHeader).toBeDefined();
      expect(DS.CardContent).toBeDefined();
      expect(DS.CardFooter).toBeDefined();
    });

    it('exporta Container', () => {
      expect(DS.Container).toBeDefined();
    });

    it('exporta Section e composição', () => {
      expect(DS.Section).toBeDefined();
      expect(DS.SectionHeader).toBeDefined();
      expect(DS.SectionContent).toBeDefined();
    });

    it('exporta Stepper e composição', () => {
      expect(DS.Stepper).toBeDefined();
      expect(DS.StepperRoot).toBeDefined();
      expect(DS.StepperItem).toBeDefined();
    });

    it('exporta LinkButton e ExternalLinkButton', () => {
      expect(DS.LinkButton).toBeDefined();
      expect(DS.ExternalLinkButton).toBeDefined();
    });

    it('exporta componentes de Text', () => {
      expect(DS.Heading).toBeDefined();
      expect(DS.Paragraph).toBeDefined();
      expect(DS.Label).toBeDefined();
      expect(DS.Text).toBeDefined();
    });
  });

  describe('Exports do Terminal', () => {
    it('exporta TerminalContainer', () => {
      expect(DS.TerminalContainer).toBeDefined();
    });

    it('exporta TerminalHeader', () => {
      expect(DS.TerminalHeader).toBeDefined();
    });

    it('exporta TerminalBody', () => {
      expect(DS.TerminalBody).toBeDefined();
    });

    it('exporta TerminalControls', () => {
      expect(DS.TerminalControls).toBeDefined();
    });
  });

  describe('Exports do Modal', () => {
    it('exporta CardModal', () => {
      expect(DS.CardModal).toBeDefined();
    });
  });

  describe('Exports de navegação', () => {
    it('exporta SideNav', () => {
      expect(DS.SideNav).toBeDefined();
    });
  });
});
